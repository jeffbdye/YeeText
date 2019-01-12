pipeline {

    agent {
        node {
            label 'YeeText'
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
                // slot swap 
                //  - move existing to secondary slot folder, copy compiled assets to live directory
                // todo: swap back from secondary slot/folder in case of failure
                sh 'mv /var/www/yeetext.net/public /var/www/yeetext.net/.secondary'
                sh 'cp /var/lib/jenkins/workspace/YeeText/public /var/www/yeetext.net/public/'
                sh 'rm -r /var/www/yeetext.net/.secondary'
            }
        }
    }
}
