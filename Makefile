# run: 
# 	docker run -d -p  3000:3000 --env-file ./.env --name logsapp logsapp:env
	
# 	#  docker run -d -p  3000:3000 --env-file ./.env --rm --name logsapp logsapp:env 

# # run-dev: 
# # 	docker run -d -p  3000:3000  -v --env-file ./.env --name logsapp logsapp:env

# stop: 
# 	 docker stop logsapp