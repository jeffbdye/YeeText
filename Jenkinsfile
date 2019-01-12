pipeline {    
    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Test') {
           steps {
               echo 'Testing...'
               create working directory
               sh 'npm run build:test'
               sh 'npm run test'
           }
        }
        stage('Bundle') {
            steps {
                echo 'Bundling...'
                sh 'npm run build:deploy'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh 'docker cp /var/lib/jenkins/workspace/YeeText/public /var/www/yeetext.net/public/'
            }
        }
    }
}
