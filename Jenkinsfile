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
                withCredentials([usernamePassword(credentialsId: '123', usernameVariable: 'vinay12345678', passwordVariable: 'Vinay@123')]) {
                    script {
                        sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                        sh 'docker push $DOCKER_REPO:$BUILD_NUMBER'
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
