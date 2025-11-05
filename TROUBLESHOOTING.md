# 🐍 Snake Animation Workflow Troubleshooting Guide

## Step-by-Step Guide to Diagnose Why the File Isn't Generated

### Step 1: Run the Workflow Manually

1. **Go to your GitHub repository**
   - Navigate to: `https://github.com/itzzkirito/itzzkirito` (or your repo URL)

2. **Click on the "Actions" tab**
   - This is located at the top of your repository page

3. **Find the workflow**
   - Look for "Generate Snake Animation" in the left sidebar
   - Click on it

4. **Run the workflow manually**
   - Click the "Run workflow" dropdown button (top right)
   - Select your branch (usually `main` or `master`)
   - Click the green "Run workflow" button

5. **Wait for it to start**
   - You'll see a new workflow run appear
   - Click on it to view the progress

---

### Step 2: Check the "Generate snake animation" Step Logs

This is the most important step to diagnose the issue.

1. **Click on the workflow run** that just started

2. **Find the "Generate snake animation" step**
   - It should be the 3rd step (after "Checkout repository" and "Create output directory")

3. **Click on the step to expand it**

4. **Look for these things:**

   **✅ GOOD SIGNS:**
   - Step completes successfully (green checkmark)
   - No error messages
   - May see messages about fetching contribution data

   **❌ BAD SIGNS to look for:**
   
   **A. Authentication Errors:**
   ```
   Error: Bad credentials
   Error: 401 Unauthorized
   Error: Authentication failed
   ```
   **What it means:** Your `GH_PAT` token is invalid or expired
   **Solution:** Create a new Personal Access Token and update the secret

   **B. Permission Errors:**
   ```
   Error: 403 Forbidden
   Error: Resource not accessible
   ```
   **What it means:** Token doesn't have the right permissions
   **Solution:** Make sure your PAT has `repo` and `read:user` scopes

   **C. Rate Limit Errors:**
   ```
   Error: API rate limit exceeded
   Error: 429 Too Many Requests
   ```
   **What it means:** Too many API calls
   **Solution:** Wait a few minutes and try again

   **D. User Not Found:**
   ```
   Error: User 'itzzkirito' not found
   Error: 404 Not Found
   ```
   **What it means:** Username might be incorrect
   **Solution:** Double-check the username in the workflow (line 28)

   **E. Silent Failure:**
   - Step appears to complete successfully
   - But no file is generated
   - No error messages shown
   **What it means:** Action might be failing silently
   **Solution:** Check the "Verify file was created" step next

---

### Step 3: Check the "Verify file was created" Step Logs

This step will tell you exactly what's happening with the file.

1. **Find the "Verify file was created" step**
   - It should be the 4th step

2. **Click on it to expand**

3. **Look at the output - it will show:**

   **A. Current Directory:**
   ```
   Current directory: /home/runner/work/itzzkirito/itzzkirito
   ```
   - This shows where the workflow is running
   - Should be in your repository directory

   **B. Listing all files in output directory:**
   ```
   Listing all files in output directory:
   total 8
   drwxr-xr-x 2 runner docker  4096 Jan 15 10:30 .
   drwxr-xr-x 5 runner docker  4096 Jan 15 10:30 ..
   -rw-r--r-- 1 runner docker   123 Jan 15 10:30 .gitkeep
   ```
   - **If you see `.gitkeep` but NO `.svg` file:** The file wasn't generated
   - **If the directory is empty:** The directory exists but no files were created
   - **If you see `.svg` file:** Success! File exists

   **C. Searching for snake files:**
   ```
   Searching for snake files in entire repo:
   ./output/github-contribution-grid-snake.svg
   ```
   - **If files are found:** The file exists but maybe in a different location
   - **If "No snake files found":** The file definitely wasn't created

   **D. File existence check:**
   ```
   ✅ File exists!
   -rw-r--r-- 1 runner docker 12345 Jan 15 10:30 output/github-contribution-grid-snake.svg
   ```
   - **If you see this:** Great! File exists and workflow should continue
   - **If you see "❌ ERROR: File does NOT exist!":** The file wasn't generated

---

### Step 4: Common Issues and Solutions

#### Issue 1: Token Authentication Failed

**Symptoms:**
- "Generate snake animation" step shows authentication errors
- Workflow fails early

**Solution:**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: `GitHub Actions Snake Animation`
4. Select scopes:
   - ✅ `repo` (Full control)
   - ✅ `read:user` (Read user profile data)
5. Click "Generate token"
6. Copy the token immediately
7. Go to your repo → Settings → Secrets and variables → Actions
8. Click "New repository secret"
9. Name: `GH_PAT`
10. Value: Paste your token
11. Click "Add secret"
12. Re-run the workflow

#### Issue 2: File Not Generated (No Errors)

**Symptoms:**
- "Generate snake animation" step completes successfully
- But "Verify file was created" shows no file

**Possible Causes & Solutions:**

**A. Token Permissions Issue:**
- Your PAT might not have `read:user` scope
- Solution: Create a new PAT with all required scopes (see Issue 1)

**B. Username Issue:**
- Username might be incorrect
- Solution: Check line 28 of workflow - make sure it says `itzzkirito`

**C. Action Version Issue:**
- The action version might have a bug
- Solution: Try changing line 24 from `@v3` to `@master`:
  ```yaml
  uses: Platane/snk/svg-only@master
  ```

**D. Output Path Issue:**
- The action might need an absolute path
- Solution: Try changing the output path to:
  ```yaml
  outputs: |
    dist/github-contribution-grid-snake.svg
  ```
  Then update the workflow to use `dist/` instead of `output/`

#### Issue 3: Workflow Runs But File Disappears

**Symptoms:**
- "Verify file was created" shows file exists
- But "Commit and push" step fails with "file not found"

**Solution:**
- This shouldn't happen with the current workflow
- Check if there's a `.gitignore` ignoring the file
- Make sure the file path is exactly the same in all steps

---

### Step 5: What to Share for Help

If you need help, share these details:

1. **Screenshot or copy of "Generate snake animation" step output:**
   - Full logs from this step
   - Any error messages (even if they seem minor)

2. **Screenshot or copy of "Verify file was created" step output:**
   - The entire output from this step
   - Especially the "Listing all files" and "Searching for snake files" sections

3. **Workflow status:**
   - Which step failed (if any)
   - Error message (if any)

4. **Token setup:**
   - Did you create a Personal Access Token?
   - What scopes did you select?
   - Is the secret named exactly `GH_PAT`?

---

### Step 6: Quick Checklist

Before running the workflow, make sure:

- [ ] Personal Access Token (PAT) is created with `repo` and `read:user` scopes
- [ ] Secret `GH_PAT` is added to repository secrets
- [ ] Workflow file has `GITHUB_TOKEN: ${{ secrets.GH_PAT }}` (line 35)
- [ ] Username is correct in workflow (line 28: `itzzkirito`)
- [ ] Output directory path is correct (line 30: `output/github-contribution-grid-snake.svg`)
- [ ] GitHub Actions are enabled in repository settings
- [ ] Repository has "Read and write permissions" enabled for workflows

---

## Still Having Issues?

If you've checked everything above and it's still not working:

1. **Try a different action version:**
   - Change `@v3` to `@master` or `@v2`

2. **Try a different output directory:**
   - Use `dist/` instead of `output/`

3. **Check if the action is working at all:**
   - Visit: https://github.com/Platane/snk
   - Check if there are any recent issues or changes

4. **Verify your GitHub username:**
   - Make sure `itzzkirito` is your exact GitHub username (case-sensitive)
   - Check at: https://github.com/itzzkirito

---

Good luck! 🍀

