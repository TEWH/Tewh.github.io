# Official TEWH Website


## Tips for Website Issues

* Try clearing your browser cache if you keep getting 404 errors or the page is redirecting to the wrong place
* If you ever delete the `docs` folder you will have to readd the custom domain (e.g. texasewh.org) since it deletes the `CNAME` file that contains the custom domain information
* Rename `baseUrl` to the custom domain (https://texasewh.org) rather than the github domain (https://tewh.github.io)
* Make sure everything including the images and Javascript are being served through HTTPS not HTTP
