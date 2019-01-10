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
                // deploy to working folder, rename existing folder, rename working folder
                // sh 'rm -r /var/www/yeetext.net/public'
                // copy artifacts plugin?
                // sh 'cp /var/lib/jenkins/workspace/yeetext/* /var/www/yeetext.net/public/'
            }
        }
    }
}
