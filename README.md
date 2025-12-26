
# Practical AI Journey

Personal website tracking AI projects, weekly commentary, and Chinese writings.

## Architecture: Local AI Pipeline
This site follows a static-generation pattern. 
1. **Local Processing**: AI news aggregation, translation, and summarization are performed locally using Python and dedicated GPU resources.
2. **Data Sync**: The Python scripts update `constants.tsx` with the latest processed data.
3. **Deployment**: Pushing to GitHub triggers a build that deploys a high-performance static site to GitHub Pages.

## Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS
- **AI Engine**: Local Python/GPU (LLM processing)
- **Hosting**: GitHub Pages

## Update Workflow
To update the site content:
1. Run your local Python scripts to generate new items for `NEWS`, `BLOG_POSTS`, or `CHINESE_WRITINGS`.
2. Ensure the output is formatted correctly in `constants.tsx`.
3. `git add . && git commit -m "Update content" && git push`
