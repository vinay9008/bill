// Jenkinsfile
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
                    sh 'docker build -t $DOCKER_REPO:$BUILD_NUMBER .'
                }
            }
        }

        stage('Push to Docker Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    script {
                        sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                        sh 'docker push $DOCKER_REPO:$BUILD_NUMBER'
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh 'kubectl set image deployment/$K8S_DEPLOYMENT supermart-billing=$DOCKER_REPO:$BUILD_NUMBER -n $K8S_NAMESPACE'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
