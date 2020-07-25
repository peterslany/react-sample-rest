	echo "You have to be in directory REPOSITORY_PATH/server to make this work!"
	cd ../react-app/ 
	npm run build 2>&1 | tee -a /dev/null
	cd -
	echo Y | cp ../react-app/build . -r
