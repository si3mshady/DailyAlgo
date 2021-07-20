pipeline {
    agent any

    stages {
        stage('Build React Env') {
            steps {
                  sh '''
                    rm -rf si3mshady_blogsite_practice || true && echo "-1" &&   
                    apt upgrade -y && apt install git -y && apt install make -y &&
                    apt install python3-pip -y &&  pip3 install awscli  && apt install curl -y &&
                    apt install nodejs -y && apt install npm -y  &&                           
                    npm i package.json && npm build && ls;
                '''
            }
        }
        stage('Test') {
            steps {
               sh '''
                 pwd 
               '''
            }
        }
        stage('Merge Dev Branch with Main Branch ') {
            steps {
                 sh '''
                 git checkout main & git merge origin/dev;                          
                 echo "it worked"
                     
               '''
            }
        }
    }
}