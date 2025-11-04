# 🚀 GitHub Profile README Setup Guide

## Quick Start

### 1. Create Repository

1. Go to GitHub and create a **new repository**
2. **Important**: Name it exactly the same as your GitHub username (e.g., if your username is `johndoe`, name the repo `johndoe`)
3. Make it **public**
4. **Don't** initialize with README, .gitignore, or license (we already have these)

### 2. Clone and Setup

```bash
git clone https://github.com/your-username/your-username.git
cd your-username
```

### 3. Customize README.md

Replace all instances of `your-username` with your actual GitHub username in `README.md`:

**Find and Replace:**
- `your-username` → Your GitHub username
- `your-discord-id` → Your Discord user ID
- `your-leetcode-username` → Your LeetCode username
- `your-email@example.com` → Your email
- `your-portfolio.com` → Your portfolio URL
- `your-handle` → Your Twitter/X handle
- `your-profile` → Your LinkedIn profile name

**Update Project Links:**
- Replace `project-1` and `project-2` with your actual repository names
- Add more projects by duplicating the project card section

**Customize Skills:**
- Add/remove badges in the Tech Stack section
- Find badges at: https://shields.io/

### 4. Enable GitHub Actions

1. Go to your repository → Settings → Actions → General
2. Enable "Allow all actions and reusable workflows"
3. The snake animation will generate automatically

### 5. Discord Status Setup

**Option 1: Using Lanyard (Recommended)**
1. Go to https://github.com/Phineas/lanyard
2. Join the Discord server: https://discord.gg/lanyard
3. Get your Discord User ID:
   - Enable Developer Mode in Discord
   - Right-click your profile → Copy ID
4. Replace `your-discord-id` in README.md with your ID

**Option 2: Simple Badge**
- Just use the Shields.io Discord badge if you don't want live status

### 6. Activity Graph Setup

The activity graph uses: https://github.com/Ashutosh00710/github-readme-activity-graph

Just replace `your-username` in the URL - it will work automatically!

### 7. LeetCode Stats (Optional)

1. Get your LeetCode username
2. Replace `your-leetcode-username` in README.md
3. Uses: https://github.com/KnlnKS/leetcode-stats

### 8. Blog Posts (Optional)

If you have a blog with RSS feed:
1. Add your RSS feed URL to: https://github.com/gautamkrishnar/blog-post-workflows
2. Follow their setup instructions

### 9. Push to GitHub

```bash
git add .
git commit -m "Initial commit: Professional GitHub Profile README"
git push origin main
```

### 10. Verify

Visit `https://github.com/your-username` - your profile should now display the README!

---

## 🎨 Customization Tips

### Change Theme Colors

Most stats use the `theme=radical` parameter. You can change it to:
- `dark`
- `radical`
- `merko`
- `gruvbox`
- `tokyonight`
- `onedark`
- `cobalt`
- `synthwave`
- `dracula`
- `monokai`
- `vue`
- `vue-dark`
- `shades-of-purple`
- `nightowl`
- `github-dark`

Example:
```markdown
theme=radical  →  theme=dark
```

### Add More Sections

You can add:
- Certifications
- Work Experience
- Education
- Awards
- Publications
- Custom SVG animations

### Animated SVG Examples

Check out:
- https://github.com/DenverCoder1/readme-typing-svg
- https://github.com/MartinHeinz/MartinHeinz
- https://github.com/abhisheknaiidu/awesome-github-profile-readme

### Badge Colors

Customize badge colors at: https://shields.io/

Example:
```markdown
![Custom Badge](https://img.shields.io/badge/Custom-FF6B6B?style=for-the-badge&logo=github&logoColor=white)
```

---

## 🔧 Troubleshooting

### README not showing on profile?
- Make sure repository name matches your username exactly
- Repository must be public
- README.md must be in the root directory

### Stats not loading?
- Wait a few minutes for cache to clear
- Check if your username is correct in all URLs
- Some stats require your repositories to be public

### Discord status not showing?
- Make sure you've joined the Lanyard Discord server
- Verify your Discord User ID is correct
- Check if you have Discord Developer Mode enabled

### Snake animation not generating?
- Check GitHub Actions tab in your repository
- Make sure Actions are enabled in repository settings
- The workflow runs daily or can be triggered manually

---

## 📚 Resources

- [Awesome GitHub Profile README](https://github.com/abhisheknaiidu/awesome-github-profile-readme)
- [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats)
- [Shields.io](https://shields.io/)
- [GitHub Profile README Generator](https://rahuldkjain.github.io/gh-profile-readme-generator/)

---

## 💡 Pro Tips

1. **Keep it updated**: Regularly update your projects and skills
2. **Use emojis**: They make your README more engaging
3. **Show personality**: Add fun facts or interests
4. **Link everything**: Make it easy for visitors to connect with you
5. **Test locally**: Use a markdown previewer to see how it looks

---

## 🎯 Next Steps

1. ✅ Customize all placeholders
2. ✅ Add your actual projects
3. ✅ Update social media links
4. ✅ Enable GitHub Actions
5. ✅ Push to GitHub
6. ✅ Share your profile!

---

**Need help?** Open an issue or check out the [Awesome GitHub Profile README](https://github.com/abhisheknaiidu/awesome-github-profile-readme) collection for inspiration!

