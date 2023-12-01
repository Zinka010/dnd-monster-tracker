# D&D Monster Tracker

D&D Monster Tracker aims to make TTRPG encounters much simpler to manage. Easily create monsters, track their HP and keep individual notes about their ongoing effects.

We have just release our 2.2.0 version here: https://dnd-monster-tracker-jtoft.k8s.csclub.cloud/

To run locally, deploy the latest docker image from docker hub here https://hub.docker.com/repository/docker/jtoft/dnd-monster-tracker

## Dev Guide

Install install nodejs and npm for your respective OS.

1. Run `npm install`
2. Run `npm start`

If you would like to suggest any changes or features, please add them as issues, or if you are so inclined, create a PR with the change from a fork.

### Run Tests

1. Run `npm test`

### To build and push the docker container

```
docker buildx build --platform linux/amd64 \
    -t {docker_user_id}/dnd-monster-tracker:X.X.X \
    -f Dockerfile \
    --push \
    --no-cache \
    .
```

### To run locally

```
docker run -p 8080:80 -d {docker_user_id}/dnd-monster-tracker:X.X.X
```
