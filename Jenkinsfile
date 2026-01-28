pipeline {
  agent any

  tools {
    nodejs 'node18'   // must match Jenkins NodeJS tool name
  }
  
  environment {
  NODE_ENV = 'test'
  WM_MARKETPLACE_USER = credentials('WM_MARKETPLACE_USER')
  WM_MARKETPLACE_PASS = credentials('WM_MARKETPLACE_PASS')
  WM_SSO_USER = credentials('WM_SSO_USER')
  WM_SSO_PASS = credentials('WM_SSO_PASS')
}


  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh '''
          npm ci
          npx playwright install --with-deps
        '''
      }
    }

    stage('Run Playwright Tests') {
      steps {
        sh '''
          npx playwright test
        '''
      }
    }

    stage('Generate Allure Report') {
      steps {
        sh '''
          npx allure generate allure-results --clean -o allure-report || true
        '''
      }
    }
  }

  post {
    always {
      allure(
        includeProperties: false,
        jdk: '',
        results: [[path: 'allure-results']]
      )
      archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
    }
  }
}
