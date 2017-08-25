import { danger, fail, markdown, message, schedule, warn } from 'danger'

message('Hello from Peril on your PR.');

message(`Diff for ${danger.git.modified_files[0]}: ${danger.git.diffForFile(danger.git.modified_files[0])}`);