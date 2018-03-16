#/bin/sh
cd public
aws s3 sync . s3://sielay.com --acl public-read
aws cloudfront create-invalidation --distribution-id E3A7I7P96TY7U7 --paths "/*"
