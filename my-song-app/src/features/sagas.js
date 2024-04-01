// src/app/sagas.js
import { all } from 'redux-saga/effects';

// Import sagas from features
import { songsSaga } from '../features/songs/sagas';

// Root saga to combine all feature sagas
export default function* rootSaga() {
  yield all([
    songsSaga(),
    // Add other feature sagas here
  ]);
}
// src/app/sagas.js
import { all } from 'redux-saga/effects';

// Import sagas from features
import { songsSaga } from '../features/songs/sagas';

// Root saga to combine all feature sagas
export default function* rootSaga() {
  yield all([
    songsSaga(),
    // Add other feature sagas here
  ]);
}
