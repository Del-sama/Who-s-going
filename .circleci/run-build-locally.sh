curl --user ${f09d6af8d8e3c21e228dde3e19aa3a91fe4bfc8d}: \
    --request POST \
    --form revision=\
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github/OsayamenOsaretin/who-s-going/tree/ch-configure-ci
