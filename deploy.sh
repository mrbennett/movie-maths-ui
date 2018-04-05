set REACT_APP_TMDB_KEY="cfe5cb91d24d4b7fb494300e0293c557"

npm run build

aws s3 sync build/ s3://hannibal-vector-front-end --acl public-read