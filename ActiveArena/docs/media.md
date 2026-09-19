# Website media provenance

These files are copied from the frozen Astribot sample bundle (the original source path is retained in the table for provenance) for the ActiveArena project website. The MP4 streams are losslessly remuxed with the `moov` index at the beginning (`faststart`); encoded video samples are unchanged. Posters are WebP snapshots from frame 0. `*-observer-hero.webp` is a higher-quality still from the observer stream for the landing hero.

## Files

| ID | Source | MP4 | Poster | Resolution | FPS | Duration | Frames | Camera role |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | --- |
| `demo-observer` | `RoboTwin_Astribot/data_ppt_samples/beat_block_hammer_rotate_view/info_gathering_demo_ppt_samples__info_gathering_demo_ppt_external_views/video/episode0_observer_camera.mp4` | [`demo-observer.mp4`](../assets/videos/demo-observer.mp4) | [`demo-observer.webp`](../assets/images/demo-observer.webp) | 1200×1000 | 30 | 2.67s | 80 | External visualization camera; not a policy input |
| `demo-head` | `RoboTwin_Astribot/data_ppt_samples/beat_block_hammer_rotate_view/info_gathering_demo_ppt_samples__info_gathering_demo_ppt_external_views/video/episode0_camera_head.mp4` | [`demo-head.mp4`](../assets/videos/demo-head.mp4) | [`demo-head.webp`](../assets/images/demo-head.webp) | 512×384 | 30 | 2.67s | 80 | Policy observation camera |
| `demo-world` | `RoboTwin_Astribot/data_ppt_samples/beat_block_hammer_rotate_view/info_gathering_demo_ppt_samples__info_gathering_demo_ppt_external_views/video/episode0_world_camera1.mp4` | [`demo-world.mp4`](../assets/videos/demo-world.mp4) | [`demo-world.webp`](../assets/images/demo-world.webp) | 640×480 | 30 | 2.67s | 80 | External visualization camera; not a policy input |
| `ood-observer` | `RoboTwin_Astribot/data_ppt_samples/beat_block_hammer_rotate_view/info_gathering_randomized_ppt_samples__info_gathering_randomized_ppt_external_views/video/episode0_observer_camera.mp4` | [`ood-observer.mp4`](../assets/videos/ood-observer.mp4) | [`ood-observer.webp`](../assets/images/ood-observer.webp) | 1200×1000 | 30 | 2.40s | 72 | External visualization camera; not a policy input |
| `ood-head` | `RoboTwin_Astribot/data_ppt_samples/beat_block_hammer_rotate_view/info_gathering_randomized_ppt_samples__info_gathering_randomized_ppt_external_views/video/episode0_camera_head.mp4` | [`ood-head.mp4`](../assets/videos/ood-head.mp4) | [`ood-head.webp`](../assets/images/ood-head.webp) | 512×384 | 30 | 2.40s | 72 | Policy observation camera |
| `ood-world` | `RoboTwin_Astribot/data_ppt_samples/beat_block_hammer_rotate_view/info_gathering_randomized_ppt_samples__info_gathering_randomized_ppt_external_views/video/episode0_world_camera1.mp4` | [`ood-world.mp4`](../assets/videos/ood-world.mp4) | [`ood-world.webp`](../assets/images/ood-world.webp) | 640×480 | 30 | 2.40s | 72 | External visualization camera; not a policy input |

## Camera and evaluation semantics

- `head` is the robot head camera and is the policy observation view in these examples.
- `observer` and `world` are external visualization cameras. They are included for explanation and qualitative comparison only; they are not policy inputs and must not be used as evaluation observations.
- `demo` corresponds to `info_gathering_demo_ppt_samples__info_gathering_demo_ppt_external_views`; `ood` corresponds to the randomized sample directory (`info_gathering_randomized_ppt_samples__info_gathering_randomized_ppt_external_views`).

## Validation

- All six MP4s are H.264 High Profile, `yuv420p`, 30 FPS, with no audio stream.
- Every output was decoded successfully with PyAV, and every decoded frame matched its source pixel-for-pixel.
- Container order is `ftyp → moov → free → mdat`, so the first frame can load before the full file is downloaded.
- `docs/media.json` contains source/output SHA-256 values and the full machine-readable metadata.
