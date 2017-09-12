import {danger, fail, warn} from 'danger';

if (!danger.github.pr.body) {
  fail('Please add a description to your PR.');
} else if (danger.github.pr.body.length < 10) {
  warn('Your PR description is too short, please elaborate more.');
}