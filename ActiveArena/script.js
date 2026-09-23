(() => {
  const video = document.querySelector('#rollout-video');
  const modeLabel = document.querySelector('#media-mode');
  const caption = document.querySelector('#media-caption');
  const splitButtons = [...document.querySelectorAll('[data-split]')];
  const cameraButtons = [...document.querySelectorAll('[data-camera]')];
  const taskSelect = document.querySelector('#task-select');
  const taskWall = document.querySelector('#task-wall');
  let split = 'demo';
  let camera = 'observer';
  let selectedTask = 'beat_block_hammer_rotate_view';
  let taskRows = [];
  let rolloutRows = [];
  const cameraMeta = {
    observer: { label: 'FRONT VIEW', caption: 'Front and side views are shown for explanation only. The policy receives the head camera view.' },
    head: { label: 'HEAD VIEW', caption: "The head camera is the policy observation view. It follows the robot's active viewpoint." },
    world: { label: 'SIDE VIEW', caption: 'Side and front views are shown for explanation only. They are not policy inputs.' }
  };
  function titleCase(value) {
    return value.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  function updateMedia() {
    if (!video) return;
    const id = split + '-' + camera;
    const taskRow = taskRows.find(row => row.id === selectedTask);
    const rollout = rolloutRows.find(row => row.task === selectedTask && row.split === split && row.camera === camera);
    const taskPath = rollout ? rollout.video : (split === 'demo' && camera === 'observer' && taskRow ? taskRow.video : 'assets/videos/' + id + '.mp4');
    const taskPoster = rollout ? rollout.poster : (split === 'demo' && camera === 'observer' && taskRow ? taskRow.poster : 'assets/images/' + id + '.webp');
    const current = video.querySelector('source');
    if (current && current.src !== new URL(taskPath, window.location.href).href) {
      current.src = taskPath;
      video.poster = taskPoster;
      video.load();
    }
    if (modeLabel) modeLabel.textContent = (split === 'demo' ? 'DEMO' : 'RANDOMIZED') + ' / ' + cameraMeta[camera].label;
    if (caption) caption.textContent = cameraMeta[camera].caption;
  }
  function selectTask(id, shouldScroll = true) {
    selectedTask = id;
    if (taskSelect) taskSelect.value = id;
    document.querySelectorAll('.task-video-card').forEach(card => card.classList.toggle('active', card.dataset.task === id));
    updateMedia();
    const demos = document.querySelector('#demos');
    if (shouldScroll && demos) demos.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  function buildTaskWall(rows) {
    if (!taskWall) return;
    taskRows = rows;
    rows.forEach((row, index) => {
      const card = document.createElement('button');
      card.className = 'task-video-card';
      card.type = 'button';
      card.dataset.task = row.id;
      const tileVideo = document.createElement('video');
      tileVideo.muted = true;
      tileVideo.loop = true;
      tileVideo.playsInline = true;
      tileVideo.preload = 'none';
      tileVideo.poster = row.poster;
      tileVideo.setAttribute('aria-label', row.label);
      const label = document.createElement('span');
      label.textContent = String(index + 1).padStart(2, '0') + ' · ' + titleCase(row.label);
      card.append(tileVideo, label);
      card.addEventListener('click', () => selectTask(row.id));
      taskWall.appendChild(card);
      if (taskSelect) {
        const option = document.createElement('option');
        option.value = row.id;
        option.textContent = String(index + 1).padStart(2, '0') + ' · ' + titleCase(row.label);
        taskSelect.appendChild(option);
      }
      observer.observe(card);
    });
    selectTask(rows[0] ? rows[0].id : selectedTask, false);
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const card = entry.target;
      const tileVideo = card.querySelector('video');
      if (entry.isIntersecting) {
        if (!tileVideo.src) {
          const row = taskRows.find(item => item.id === card.dataset.task);
          if (row) tileVideo.src = row.preview_video || row.video;
        }
        tileVideo.play().catch(() => {});
      } else {
        tileVideo.pause();
      }
    });
  }, { rootMargin: '300px 0px' });
  splitButtons.forEach(button => button.addEventListener('click', () => {
    split = button.dataset.split;
    splitButtons.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-selected', active); });
    updateMedia();
  }));
  cameraButtons.forEach(button => button.addEventListener('click', () => {
    camera = button.dataset.camera;
    cameraButtons.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-selected', active); });
    updateMedia();
  }));
  if (taskSelect) taskSelect.addEventListener('change', event => selectTask(event.target.value));
  if (video) video.addEventListener('loadedmetadata', () => video.play().catch(() => {}));
  Promise.all(['docs/task-videos.json', 'docs/rollout-videos.json'].map(path => fetch(path).then(response => {
    if (!response.ok) throw new Error(path + ' unavailable');
    return response.json();
  })))
    .then(([tasks, rollouts]) => { rolloutRows = rollouts; buildTaskWall(tasks); })
    .catch(error => {
      if (taskWall) taskWall.innerHTML = '<p class="media-caption">Task video gallery unavailable: ' + error.message + '</p>';
    });
})();
