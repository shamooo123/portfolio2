# Portfolio redesign

## What changed

- Replaced the dark glass panels, glow effects, animated dot field and typewriter with a light, restrained layout, dark type and blue accents.
- Put the projects ahead of the biography and experience. The hero uses the real gimbal build, with one primary project link and one CV download.
- Removed the redundant Elsewhere section and repeated CV/social calls to action. Social links remain in the navigation and footer.
- Replaced the generic skills strip with specific evidence: First Class degree, eight suspension components and four materials tested.
- Shortened every project card and made the case study links consistently visible.
- Added category filters to the project archive, a role/date/outcome summary to each case study, contents links, clear table styling, photo captions and next-project navigation.
- Brought manufacturing and test photos from the supplied individual design report into the trainer case study.
- Removed third-party product images from the Ender article and repaired the broken pedal-plating image reference.
- Optimised displayed images as WebP files, retained the source photographs and added lazy loading below the hero.
- Added a matching 404 page, working favicon reference, sitemap and clearer maintenance instructions.

## Content decisions

- Kept the supplied updated general CV (`Hishaam_Ali_Abbasi_CV.pdf`) and used it as the single visible main download. It is two pages and was not replaced by the CMR-specific CV.
- Used the current attached CV's degree dates, 2023–2026, and Formula Student end date, June 2026. The old CV files contain different dates and student status, so they are no longer linked from the interface.
- Retained the HSBC insight programme from the supplied website as brief additional experience. It is not in the main CV; remove it if it should no longer appear publicly.
- Described the trainer's under-£500 figure as estimated materials cost, consistent with the supplied case study. Removed the commercial price comparison and unqualified durability or clinical-equivalence claims.
- Kept the distinction between selected PETG-CF and the PLA/ASA-CF actually used in the prototype, plus the outstanding cyclic and clinical evaluation.
- Retained the printer speed figures only as observations from the supplied notes, with their lack of a controlled comparison made explicit.
- Separated the completed BoxTurtle feed system from the ongoing Ender integration. Omitted conflicting or uncertain claims about the stock printer's Z drive, probe and cooling specifications.
- Removed blanket material, reliability and security claims, market-price comparisons and unsupported lifelong-durability language. No new achievement, employer, grade or performance metric was added.
- Simplified the server article around architecture and problems solved; removed service-administration addresses and claims such as transferring to a home NAS without using the home internet connection.

## Verification

The final build and local checks are recorded below after completion. Browser visual and interaction checks were blocked by the browser security policy, so they have not been claimed as passed. The responsive layout and interactions were implemented and reviewed in source.

- Production build completed successfully with the supplied Astro dependency versions.
- Checked 10 HTML pages and 228 local URLs, asset references and anchors with no missing targets.
- Confirmed all 10 supplied PDFs open and the main CV download matches the supplied updated general CV.
- All emitted client JavaScript passed syntax checks.
- Confirmed nine public page entries in the sitemap.
- Browser screenshots, mobile interaction tests and third-party video playback remain unverified because the preview URL was blocked by browser policy.
