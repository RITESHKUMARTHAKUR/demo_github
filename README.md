## Pull a new branch from github repo to your computer 
```code 
    git pull origin <branch name>
```
```code 
    git checkout <branch name>
```

## Pull changes from other branch to your branch 
```code
git merge <branch name>
```


### Changes from `dev_ritesh`

## Steps to Merge a Branch Changes to Master Branch

- Push your changes to a `specific branch` other than master.

    ```json
    git add .
    git commit -m "commit name with double quote"
    git push
    ```

- Move to GitHub (a create pull request button appears), `create a pull request` to the `master branch`.

- After the repo admin reviews,admin merges your branch changes into the master branch.

- If any changes need to be made again, push the changes to your branch. This time, creating a new pull request is not necessary (as the previous pull request is not merged).
