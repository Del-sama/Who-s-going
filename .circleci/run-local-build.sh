# !/usr/bin/env bash

curl --user ${CIRCLE_TOKEN}: \
    --request POST \
    --form revision=e876c063884c4ddfb2d502c14f66f004ea01ae83 \
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github/who-s-going/Who-s-going/tree/ch-setup-project


# curl https://circleci.com/api/v1.1/projects?circle-token=bfb32ba551db228ce6d814db642ec6f82258112c
 
