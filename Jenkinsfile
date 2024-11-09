pipeline {
    agent any

    environment {
        DOCKER_REPO = 'your-docker-repo/supermart-billing'  // Replace with your DockerHub repo
        K8S_DEPLOYMENT = 'supermart-billing-deployment'
        K8S_NAMESPACE = 'default'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh 'docker build -t $DOCKER_REPO:$BUILD_NUMBER . || exit 1'
                }
            }
        }

        stage('Push to Docker Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-credentials-id', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    script {
                        // Docker login and push
                        sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin || exit 1'
                        sh 'docker push $DOCKER_REPO:$BUILD_NUMBER || exit 1'
                    }
                }
            }
        }

        // Optional: Deploy to Kubernetes (assuming you have `kubectl` set up in your Jenkins agent)
        
    post {
        always {
            cleanWs()  // Clean workspace after build
        }
    }
}
