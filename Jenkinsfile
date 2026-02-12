pipeline {
  agent any

  stages {
    stage('Test npm') {
      steps {
        echo 'Test npm: run locally (node/npm not available on this Jenkins agent)'
      }
    }

    stage('Build') {
      steps {
        echo 'Build: run locally (node/npm not available on this Jenkins agent)'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploy: handled by Vercel Git Integration when pushing to GitHub'
      }
    }
  }
}
