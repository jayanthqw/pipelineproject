pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/jayanthqw/pipelineproject.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp:latest .'
            }
        }
        stage('Run Containers') {
            steps {
                sh 'docker run -d -p 80:3000 myapp:latest'
            }
        }
    }
}

