# WonderProxy Blog theme

## Liebling Theme 

[Liebling](https://github.com/eddiesigner/liebling) is the theme we've chosen to build upon since it has a lot of neat features and a slick layout.

### Fetching & merging updates from the parent theme

We're working off a fork of the original theme. To fetch any updates / bug
fixes from the OG theme:

1. Add the upstream repository as a remote

   ```
   git remote add upstream https://github.com/eddiesigner/liebling.git
   ```

2. Get the latest updates from upstream

   ```
   git fetch upstream
   ```

3. Merge the latest release from upstream into our customized theme:

   ```
   git checkout master
   git merge v.0.6.6 # or whatever the latest version is
   ```

   or the bleeding edge from upstream:

   ```
   git checkout master
   git merge upstream/master
   ```

## Local development 

### To get set up with Docker, follow these docs:

[Theme development with Docker](https://github.com/eddiesigner/liebling/wiki/Theme-development-with-Docker)

If you're already all set up, you can pop into /src and run:

`npm run docker-watch` 

The blog will be available at `http://localhost:3000`.

## Building a zip to upload to Ghost 

Go to /src directory and build the theme for production by running:

`npm run production`

This command will generate the file liebling.zip in the root of the theme directory. Now you can upload this file to Ghost 😎.
