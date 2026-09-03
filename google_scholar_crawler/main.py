from scholarly import scholarly
import json
from datetime import datetime, timezone
import os
from pathlib import Path

scholar_id = os.environ.get("GOOGLE_SCHOLAR_ID")
if not scholar_id:
    raise SystemExit("Set GOOGLE_SCHOLAR_ID before running the crawler.")
author: dict = scholarly.search_author_id(scholar_id)
scholarly.fill(author, sections=['basics', 'indices', 'counts', 'publications'])
author['updated'] = datetime.now(timezone.utc).isoformat()
author['publications'] = {v['author_pub_id']:v for v in author['publications']}
print(json.dumps(author, indent=2))
results_dir = Path('results')
results_dir.mkdir(exist_ok=True)
with (results_dir / 'gs_data.json').open('w', encoding='utf-8') as outfile:
    json.dump(author, outfile, ensure_ascii=False, indent=2)

shieldio_data = {
  "schemaVersion": 1,
  "label": "citations",
  "message": f"{author['citedby']}",
}
with (results_dir / 'gs_data_shieldsio.json').open('w', encoding='utf-8') as outfile:
    json.dump(shieldio_data, outfile, ensure_ascii=False, indent=2)
