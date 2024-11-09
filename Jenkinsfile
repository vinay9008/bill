pipeline {
    agent any

    environment {
        DOCKER_REPO = 'your-docker-repo/supermart-billing'  // Replace with your DockerHub repo
        K8S_DEPLOYMENT = 'supermart-billing-deployment'
        K8S_NAMESPACE = 'default'
        DOCKER_USER = 'vinay12345678'  // Replace with your DockerHub username
        DOCKER_PASS = 'Vinay@123'  // Replace with your DockerHub password
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image with tag based on Jenkins build number
                    sh 'docker build -t $DOCKER_REPO:$BUILD_NUMBER .'
                }
            }
        }

        stage('Push to Docker Registry') {
            steps {
                script {
                    // Login to Docker registry using direct credentials
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'

                    // Push the Docker image to the registry
                    sh 'docker push $DOCKER_REPO:$BUILD_NUMBER'
                }
            }
        }
    }

    post {
        always {
            cleanWs()  // Clean up the workspace after the build
        }
    }
}
