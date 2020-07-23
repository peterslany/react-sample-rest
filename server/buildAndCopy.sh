function buildAndCopy() {
	cd /home/peter/webdev/profile_web/server
	cd ../react-app/ 
	npm run build 2>&1 | tee -a /dev/null
	cd -
	echo Y | cp ../react-app/build . -r
}

buildAndCopy