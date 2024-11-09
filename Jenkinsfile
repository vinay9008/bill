pipeline {
    agent any

    environment {
        DEPLOY_ENV = 'staging'
    }

    stages {
        stage('Checkout') {
            steps {
                // Corrected repository URL
                git 'https://github.com/vinay9008/billing.git'
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Building application..."'
                // Replace with actual build commands, e.g., 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running tests..."'
                // Replace with actual testing commands, e.g., 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo "Deploying to ${DEPLOY_ENV} environment..."'
                // Add actual deployment commands, like scp or remote deployment scripts
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            deleteDir()
        }
    }
}
