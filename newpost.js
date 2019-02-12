#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'title',
      type: 'input'
    },
    {
      name: 'date',
      type: 'input'
    },
    {
      name: 'tags',
      type: 'input'
    }
  ])
  .then(answers => {
    const { title, date, tags } = answers;
    const dir = path.join(
      __dirname,
      'data',
      'blog',
      `${date}-${title}`
        .replace(/ą/g, 'a')
        .replace(/ę/g, 'e')
        .replace(/ć/g, 'c')
        .replace(/ś/g, 's')
        .replace(/ó/g, 'o')
        .replace(/ł/g, 'l')
        .replace(/ń/g, 'n')
        .replace(/ź/g, 'z')
        .replace(/ż/g, 'z')
        .replace(/[^a-zA-Z0-9-]+/g, '-')
        .replace(/(^-+|-+$)/g, '')
        .toLowerCase()
    );
    const content = `---
title: '${title}'
createdDate: '${date}'
updatedDate: '${date}'
author: sielay
tags: [${tags}]
draft: false
image: .jpg
---

![](.jpg)
`;
    fs.mkdir(dir, err => {
      if (err) {
        return console.error(err);
      }
      fs.writeFile(path.join(dir, 'index.md'), content, 'utf8', err => {
        if (err) {
          return console.error(err);
        }
        console.log('done');
      });
    });
  });
