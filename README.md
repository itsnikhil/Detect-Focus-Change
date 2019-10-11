# Implementation of Monitoring System for Online Test

*NOTE:* Refreshing the page will reset illegal attempts count, **Therefore it is advised to save count as a field in database**

## What counts as illegal attempt?

* Hitting Windows/Home button
* Trying to access Inspect Element
* Switching windows/applications
* Switch browser tabs
* Changing url

## How to use:

### Step 1:

Add `script checkFocus.js` in head section.
```html
<head>
  ...
  <script defer src="checkFocus.js"></script>
  ...
```
### Step 2:
Change `function takeAction()` from the above mentioned script's (checkFocus.js) code to auto submit the test.

### Step 3:
Add `class pagecontainer` to all whole quiz section to remove content if javascript is disabled as webpage focus detection depends upon javascript execution then paste the code given below just before ending of html tag

```html
  ...
  <noscript>
    <style type="text/css">
      .pagecontainer {
        display: none;
      }
    </style>
    <div class="noscriptmsg">
      You don't have javascript enabled. Good luck with that.
    </div>
  </noscript>
</body>
```
## Sample Screenshots
_Alert warning if popup is blocked_
![Alert warning if popup is blocked](https://raw.githubusercontent.com/itsnikhil/Detect-Focus-Change/master/Screenshots/alert%20warning%20if%20popup%20is%20blocked.png)

_Sample warning if found cheating_
![Sample warning if found cheating](https://github.com/itsnikhil/Detect-Focus-Change/blob/master/Screenshots/warning%20on%20cheating.png)

_When 3 illegal attempt is made_
![When 3 illegal attempts are made](https://github.com/itsnikhil/Detect-Focus-Change/blob/master/Screenshots/take%20action.png)

## Works on
  So far I have tested on:
  * **Chrome and Edge** - Windows 10
  * **Chrome** - Android 10
  * **Safari** - iOS 13

## Author
[Nikhil Taneja](https://itsnikhil.pythonanywhere.com)

[Contact](mailto:taneja.nikhil03@gmail.com)
