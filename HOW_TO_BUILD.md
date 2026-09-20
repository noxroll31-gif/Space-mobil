# SpaceVWID — Android APK

Capacitor project wrapping the SpaceVWID web game.
Ready to build on any machine with Android Studio, or via GitHub Actions (no local SDK needed).

## Option A — GitHub Actions (easiest, no install)

1. Create a new GitHub repository.
2. Upload / push this entire folder to it.
3. Go to **Actions** → **Build APK** → **Run workflow**.
4. When it finishes, download the artifact **SpaceVWID-debug**.
5. Install the `.apk` on your phone (enable "Install from unknown sources").

## Option B — Android Studio

1. Install [Android Studio](https://developer.android.com/studio).
2. File → Open → select the `android/` folder.
3. Wait for Gradle sync (first time downloads SDK).
4. Build → Build Bundle(s) / APK(s) → Build APK(s).
5. APK path: `android/app/build/outputs/apk/debug/app-debug.apk`

## Option C — Command line

```bash
cd android
./gradlew assembleDebug
```

Requires Android SDK + JDK 17+.

## What was configured

- App name: **SpaceVWID**
- Package ID: `com.spacevwid.game`
- Orientation: landscape (sensor)
- Viewport locked (no zoom)
- Tauri desktop calls stubbed (game won't crash when quitting / changing window mode)
- Touch / pointer events already present in the original game

## Notes

- Debug APK is unsigned for release stores. For Play Store you need a release keystore + `assembleRelease`.
- If something looks broken (missing fonts/sounds), the original build may reference assets that were not in the two JS/CSS files. Send the full `dist` folder if needed.
- Side UI panels are desktop-sized; on very small phones you may want extra mobile layout tweaks later.
