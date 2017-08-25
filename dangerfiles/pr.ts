import { TextDiff, danger, fail, markdown, message, schedule, warn } from 'danger'

message('Hello from Peril on your PR.');

if (danger.git.modified_files.length === 0) {
  message('There were no modified files');
} else {

  let file = danger.git.modified_files[0];
  schedule(async () => {
    let diff = (await danger.git.diffForFile(file) as TextDiff);
    if (diff) {
      message(`Diff for ${file}: ${diff.diff}`);
    } else {
      message(`No diff for ${file}`);
    }
  });
}