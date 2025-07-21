// pipeline {
//     agent any
//     stages {
//         stage('Clone') {
//             steps {
//                 git branch: 'main', url: 'https://github.com/jayanthqw/pipelineproject.git'
//             }
//         }
//         stage('Build Docker Image') {
//             steps {
//                 sh 'docker build -t myapp:latest .'
//             }
//         }
//         stage('Run Container') {
//             steps {
//                 sh 'docker run -d -p 80:3000 myapp:latest'
//             }
//         }
//     }
// }



pipeline{
	agent any 
	stages{
		stage('paralel-pipeline'){
			parallel{
				stage('stageA'){
					steps{
						echo "stageA"
						sleep 5
					}
				}
				stage('stageB'){
					steps{
						echo "stageB"
						sleep 5
					}
				}
				stage('stageC'){
					steps{
						echo "stageC"
						sleep 5
					}
				}
			}
		}
	}
}   