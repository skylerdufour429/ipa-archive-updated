# IPA Archive

A GitHub Pages + GitHub Codespaces-ready web app for browsing an archive of legacy iOS application packages.

## Add to Home Screen — iPad 1st Generation

1. Open the IPA Archive webpage in Safari.
2. Tap the **Share** button.
3. Select **Add to Home Screen**.
4. Enter the desired name for the archive.
5. Tap **Add**.

## Archive Information

The archive contains the following application records:

| App Name | Version | Minimum iOS | File Size |
|---|---:|---:|---:|
| Animal Sounds | 2.0 | 3.1 | 19.8 MB |
| SoundTouch | 1.4 | 3.0 | 155.5 MB |
| Tozzle | 3.7 | 3.1.3 | 112.6 MB |
| AutismXpress | 1.0 | 3.1.2 | 7.4 MB |
| Lunchbox | 1.4 | 3.0 | 13.7 MB |
| Peek-a-Zoo | 1.1.1 | 3.0 | 19.1 MB |
| Michigan Nature Sounds | 1.0 | 3.0 | 24.6 MB |
| Peek-a-Zoo | 1.0 | 3.0 | 24.6 MB |
| Artsee | 1.1 | 2.2 | 12.4 MB |
| Angry Birds | 1.5.3 | 3.0 | 16.8 MB |
| Farm Flip Fun | 1.0 | 3.0 | 10.6 MB |
| Farm Story | 1.2 | 3.0 | 19.9 MB |
| Stickers | 1.0 | 5.0 | 206.1 MB |
| Forest | 1.1.0 | 3.1.3 | 25.6 MB |
| Virtuoso | 3.1.2 | 4.0 | 19.9 MB |
| ABC Tracer | 1.8 | 2.2.1 | 20.9 MB |
| Peek Wild | 2.0.1 | 3.1.3 | 9.8 MB |
| Peekaboo | 2.0 | 2.2 | 3.6 MB |
| Finding Sight | 2.1 | 3.2 | 34 MB |
| ArtikPix | 1.2.4 | 3.1 | 41.4 MB |

## App Record Format

Each archive entry contains:

- App Name
- Bundle ID
- Version
- Platform
- Minimum OS
- IPA filename
- File Size
- App Bundle Path
- Archive Type
- Install App button

## Archive Type

**App Store Package**

Example bundle path:

```text
Payload/Animal Sounds.app
```

Example IPA:

```text
Animal Sounds 2.0.ipa
```

## GitHub Pages

This project can be deployed as a static website through GitHub Pages.

## GitHub Codespaces

Open the repository in GitHub Codespaces to edit the HTML, CSS, and JavaScript files directly in the browser.

> Note: The webpage is an archive/catalog interface. An "Install App" button should point to an authorized IPA download or installation mechanism; simply linking to an IPA does not by itself make legacy iOS installation possible on every device.
