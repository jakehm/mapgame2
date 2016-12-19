import firebase from 'firebase'
import { FIREBASE_CONFIG } from '../../config/firebase.config'

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG)
export const firebaseAuth = firebaseApp.auth()
export const firebaseDb = firebaseApp.database()

const FireBaseTools = {
  getProvider: (provider) => {
    switch (provider) {
      case 'email':
        return new firebase.auth.EmailAuthProvider()
      case 'facebook':
        return new firebase.auth.FacebookAuthProvider()
      case 'github':
        return new firebase.auth.GithubAuthProvider()
      case 'google':
        return new firebase.auth.GoogleAuthProvider()
      case 'twitter':
        return new firebase.auth.TwitterAuthProvider()
      default:
    }
  },
  
  loginWithProvider: (p) => {
    const provider = FireBaseTools.getProvider(p)
    return forebaseAuth.signInWithPopup(provider).then(result => {
      return firebaseAuth.currentUser
    }).catch(error => {
      return {
        errorCode: error.code,
        errorMessage: error.message
      }
    })
  },

  registerUser: (user) => {
    return firebaseAuth.createUserWithEmailAndPassword(user.email, user.password).then(user => {
      return user
    }).catch(error => {
      return {
        errorCode: error.code,
        errorMessage: error.message
      }
    })
  },

  logoutUser: () => {
    return firebaseAuth.signOut().then(() => {
      return {
        success: 1,
        message: 'logout'
      }
    })
  },

  fetchUser: () => {
    return new Promise((resolve, reject) => {
      const unsub = firebaseAuth.onAuthStateChanged(user => {
        unsub()
        resolve(user)
      }, error => {
        reject(error)
      })
    })
  },

  loginUser: (user) => {
    return firebaseAuth.signInWithEmailAndPassword(user.email, user.password).then(user => {
      return user
    }).catch(error => {
      return {
        errorCode: error.code,
        errorMessage: error.message
      }
    })
  },

  updateUserProfile: (u) => {
    return firebaseAuth.currentUser.updateProfile(u).then(() => {
      return firebaseAuth.currentUser
    }, error => {
      return {
        errorCode: error.code,
        errorMessage: error.message
      }
    })
  },

  resetPasswordEmail: (email) => {
    return firebaseAuth.sendPasswordResetEmail(email).then(() => {
      return {
        message: 'Email sent'
      }
    }, error => {
      return {
        errorCode: error.code,
        errorMessage: error.message
      }
    })
  },

  changePassword: (newPassword) => {
    return firebaseAuth.currentUser.updatePassword(newPassword).then(user => {
      return user
    }, error => {
      return {
        errorCode: error.code,
        errorMessage: error.message
      }
    })
  },

  sendEmailVerification: () => {
    return firebaseAuth.currentUser.sendEmailVerification().then(() => {
      return {
        message: 'Email sent'
      }
    }, error => {
      return {
        errorCode: error.code,
        errorMessage: error.message
      }
    })
  },

  getDatabaseReference: (path) => {
    return firebaseDb.ref(path)
  }
}

export default FireBaseTools