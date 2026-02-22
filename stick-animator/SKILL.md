---
name: stick-animator
description: Create animated stick figure slideshow videos with TTS narration using rapid 3-8 second scenes. Scripts can auto-generate figures, find web images, or use provided files. Use for educational videos with continuous narration in "why it sucks to be" storytelling style with colored mood backgrounds.
---

# Stick Animator

## Quick Start

```bash
# Create a 10-minute stick figure video:
python3 scripts/create_stick_video.py --topic "French Revolution" --duration 10 --style why-it-sucks

# Or use existing images:
python3 scripts/create_stick_video.py --topic "My Topic" --script my_script.txt --images my_images/ --duration 10

# Or find images from web:
python3 scripts/create_stick_video.py --topic "Quantum Physics" --auto-find-images --duration 10
```

## Core Concepts

**Stick Figure Videos** = Simple black line figures + Colored backgrounds + Continuous narration
- Static images (no complex animation needed)
- Rapid scene changes (3-8 seconds per scene)
- TTS narration without pauses
- Background colors set mood (gray=tragic, red=tension, blue=hope, etc.)

**Scene Duration**: 3-8 seconds (vs. typical 30-90 seconds)
- Creates engaging, fast-paced videos
- Requires more scenes (~75-200 for 10-minute video)
- Scripts need frequent scene changes

**"Why It Sucks To Be" Narrative Style**:
- Conversational tone: "Imagine you're..."
- Slightly humorous but informative
- Continuous talking, no gaps
- Build narrative arc (misery → action → change)
- First-person perspective engagement

## Image Sources

1. **Auto-generated stick figures** (default) - Python/PIL creates simple stick figures
2. **Web search** - Downloads images matching scene descriptions
3. **Workspace provided** - Uses images from user's folder
4. **Mixed approach** - Combine any of the above

## Video Formats

**Output Only**: MP4 video with synchronized audio
- MP4 is the final deliverable (no HTML slideshow option)
- Requires ffmpeg for video creation
- All downloaded images are saved to `image_assets/` for reuse

## Workflow Overview

```
1. Scripting → Write 10-min narration script with scene markers
2. Image prep → Generate/find/create images for each scene
3. Audio → Generate TTS segments matching scene durations
4. Assembly → Combine into video: Image + Audio = Scene
5. Export → MP4 video file
```

## Essential Steps (Detailed)

### Step 1: Script Creation

**Script requirements:**
- Target: 10 minutes exactly
- Word count: ~1500-1600 words @ 950-1050 words per 10 min
- Scene markers every 40-100 words (for 3-8 second scenes)
- Total scenes: ~75-200 (150 average for 10 min @ 6 sec/scene)

**Script format:**
```
[SCENE 1] Intro: Imagine you're born in 1780s France as a peasant...
(narration continues 40-100 words)

[SCENE 2] The Estates System divides society into three unfair tiers...
(narration continues 40-100 words)

[SCENE 3] King Louis XVI is throwing lavish parties...
(narration continues 40-100 words)
```

**Writing guidelines:**
- Conversational, engaging tone
- Build narrative momentum
- Vary sentence lengths
- No dates/data dumps without context
- Smooth scene transitions

### Step 2: Image Generation

**Method A - Auto-generate stick figures** (default):
```python
# Script automatically creates stick figures
# Default: colored backgrounds, simple black figures
# Can customize: complexity, poses, colors
```

**Method B - Web search for images**:
```python
# Searches web for images matching scene description
# Downloads and processes for video use
# Example: searches "sad peasant illustration" or "revolutionary mob"
```

**Method C - Use provided images**:
```python
# Images from user's workspace folder
# Must match scene count in order
# Supports PNG, JPG, WEBP formats
```

**Method D - Mixed**:
```python
# Use auto-gen for some scenes
# Web search for specific ones
# User-provided for key moments
```

**Image specifications:**
- Resolution: 1280x720 (HD) or 1920x1080 (Full HD)
- Style: Stick figures or simple illustrations
- Background: Colored (varied for mood)
- Format: PNG (preferred for quality)

**Background color guide:**
- Gray/Brown → Tragic, suffering, poverty
- Red → Tension, revolution, violence
- Blue → Hope, ideals, reform
- Green → New beginnings, growth
- Purple → Royal, aristocracy
- Black/Dark → Terror, chaos, death
- Yellow → Enlightenment, ideas
- Orange → Revolution in progress

### Step 3: TTS Audio Generation

**Audio segments:**
- One segment per scene (= one image)
- Matches scene duration (3-8 seconds)
- Voice: Engaging, natural, slight humor
- Format: MP3

**Duration calculation:**
- 40-100 words per scene @ 150 words/min = 16-40 seconds
- BUT: For 3-8 sec/scene, need 10-20 words per scene
- Adjustment: More scenes with shorter narration

**Practical approach:**
```python
# Script: 1500 words total for 10 minutes
# 1500 ÷ (10 min × 60) = 2.5 words/sec = 150 words/min
# For 6 sec average: 15 words/scene
# Total scenes: 1500 ÷ 15 = 100 scenes for 10-min video
```

### Step 4: Video Assembly

**Image + Audio = Scene:**
```
Scene 001: image001.png + audio001.mp3 → 6 seconds
Scene 002: image002.png + audio002.mp3 → 5.7 seconds
Scene 003: image003.png + audio003.mp3 → 7.2 seconds
...
Total: 10 minutes exactly
```

**Assembly tools:**
1. ffmpeg - Direct MP4 creation (required)
2. If ffmpeg not available, video creation will fail

**Output:**
- MP4 video file is the only deliverable format
- ffmpeg is required for video creation

### Step 5: Export & Delivery

**Files created:**
```
stick_output_[topic]_[timestamp]/
├── video.mp4                    ← Main deliverable (MP4)
├── script.txt                   ← Source narration
├── images/                       ← Scene images
├── audio/                        ← TTS segments
└── report.txt                   ← Summary report

image_assets/                    ← Downloaded images saved here for reuse
                                  (in workspace, persists between projects)
```

## Scripts Reference

### Main Scripts

**`create_stick_video.py`** (primary)
Main orchestration script that runs entire workflow.

Usage:
```bash
python3 scripts/create_stick_video.py \
  --topic "Your Topic" \
  --duration 10 \
  --style why-it-sucks \
  --auto-stick-figures
```

**`generate_stick_figures.py`** (optional)
Auto-generate stick figure images.

Usage:
```bash
python3 scripts/generate_stick_figures.py \
  --script script.txt \
  --output images/ \
  --mood-sequence tragic,revolution,hope
```

**`find_web_images.py`** (optional)
Find and download images from web.

Usage:
```bash
python3 scripts/find_web_images.py \
  --script script.txt \
  --search-terms "sad peasant, angry mob, king party" \
  --output images/
```

**`assemble_video.py`** (internal)
Combine images + audio into video.

**`generate_audio.py`** (internal)
Create TTS audio from script segments.

## Configuration Options

**Scene duration:**
- Default: 6 seconds (balanced)
- Range: 3-8 seconds
- Trade-off: Shorter = more scenes, Longer = deeper scenes per image

**Image style:**
- Auto-gen (default) - Simple stick figures
- Web search - Find relevant illustrations (saved to image_assets/)
- Provided - Use user images
- Mixed - Combine sources

**Video format:**
- MP4 only - ffmpeg is required for video creation

**Image asset storage:**
- Downloaded images are saved to workspace/image_assets/
- Images persist between video projects
- Can reuse images in future videos by referencing image_assets/

**Mood sequence:**
- Can specify: "tragic,tension,hope,change"
- Or auto-detect from script tone

## Tips for Best Results

**Script writing:**
- Plan scene changes carefully (every 40-100 words)
- Use variety: some scenes 5 words, some 25 words
- Keep momentum flowing
- Vary sentence structures
- Avoid long paragraphs

**Image selection:**
- Match mood to background color
- Use consistent style (all stick figures or all illustrations)
- Keep simple - complex scenes distract
- Ensure visibility at small sizes

**Audio quality:**
- Test different voices
- Adjust speed (0.8-1.2x)
- Verify no gaps between segments
- Check for pronunciation issues

## Troubleshooting

**Video too long/short:**
- Adjust script word count (aim for exact 1500 for 10 min)
- Adjust scene duration (if too long, use shorter scenes)

**Images don't match narration:**
- Check scene markers in script
- Verify image count matches audio count
- Review mood/background color choices

**Audio gaps:**
- Verify all scenes have audio
- Check file numbering (001, 002, etc.)
- Test final video for smoothness

## Examples

**Example 1 - Quick start:**
```bash
# Auto-generated stick figures, 10-minute video
python3 scripts/create_stick_video.py \
  --topic "Solar System" \
  --duration 10
```

**Example 2 - With custom images:**
```bash
# Use provided images folder
python3 scripts/create_stick_video.py \
  --script space_script.txt \
  --images space_images/ \
  --duration 10
```

**Example 3 - Web search images (saves to image_assets/ for reuse):**
```bash
# Find images from web automatically - saved to image_assets/
python3 scripts/create_stick_video.py \
  --topic "American Civil War" \
  --auto-find-images \
  --duration 10
```

**Example 4 - Mixed approach:**
```bash
# Auto-gen most, web search specific scenes
python3 scripts/create_stick_video.py \
  --script civil_war_script.txt \
  --stick-gen 80 \
  --web-search 20 \
  --duration 10
```

## Advanced Usage

**Custom image size:**
```bash
# Use Full HD (1920x1080)
python3 scripts/create_stick_video.py --resolution 1920x1080 ...
```

**Custom voice:**
```bash
# Use different TTS voice
python3 scripts/create_stick_video.py --voice "elevenlabs-voice-id" ...
```

**Loop mode (infinite video):**
```bash
# Create looping video
python3 scripts/create_stick_video.py --loop ...
```

**Add captions:**
```bash
# Include caption track
python3 scripts/create_stick_video.py --captions ...
```

## Resources

See [references/] for:
- [STYLE_GUIDE.md](references/STYLE_GUIDE.md) - Comprehensive style and tone guidance
- [SCENE_PLANNING.md](references/SCENE_PLANNING.md) - Scene planning strategies
- [IMAGE_SOURCES.md](references/IMAGE_SOURCES.md) - Finding and creating images
- [TTS_OPTIONS.md](references/TTS_OPTIONS.md) - Voice and audio options

See [assets/] for:
- [template_script.txt](assets/template_script.txt) - Starting script template
- [stick_figure_samples/] - Reference stick figure examples
- [mood_backgrounds/] - Background color samples

## Limitations

- Image quality depends on source (web vs. auto-gen vs. user-provided)
- TTS voice options limited to available voices
- Video assembly **requires ffmpeg** (no fallback format)
- Downloaded images are saved to `image_assets/` and persist between projects
- Scene duration minimum ~3 seconds (audio generation constraint)
- Maximum practical length: ~15-20 minutes (beyond that, scene fatigue)

## Performance

**Typical runtime:**
- Auto-gen stick figures: ~30-60 seconds per 100 images
- Web search images: ~60-120 seconds per 100 images
- TTS generation: ~15-30 seconds per 100 segments
- Video assembly: ~30-60 seconds for 10-minute video
- Total: ~3-5 minutes for simple 10-minute video with auto-gen

**Resource usage:**
- Disk space: ~10-15 MB per 10-minute video
- Memory: Low during processing
- CPU: Moderate during video assembly