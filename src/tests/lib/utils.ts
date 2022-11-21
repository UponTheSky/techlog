import { Article } from '@prisma/client';
import { getMonthsBefore } from '../../utils/date';

export const createFakeArticles = (): Article[] => [
  {
    id: 1,
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    thumbnail: null,
    title: 'test',
    excerpt: null,
    content: null,
    articleId: '1',
  },
  {
    id: 2,
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    thumbnail: '',
    title: 'test2',
    excerpt: 'excerpt2',
    content: 'content2',
    articleId: '2',
  },
  {
    id: 3,
    createdAt: getMonthsBefore(3),
    updatedAt: getMonthsBefore(2),
    thumbnail: '',
    title: 'test3',
    excerpt: 'excerpt3',
    content: 'content3',
    articleId: '3',
  },
  {
    id: 4,
    createdAt: getMonthsBefore(2),
    updatedAt: getMonthsBefore(1),
    thumbnail: '',
    title: 'test4',
    excerpt: 'excerpt4',
    content: 'content4',
    articleId: '4',
  },
  {
    id: 5,
    createdAt: getMonthsBefore(2),
    updatedAt: getMonthsBefore(2),
    thumbnail: '',
    title: 'test5',
    excerpt: 'excerpt5',
    content: 'content5',
    articleId: '5',
  },
  {
    id: 6,
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    thumbnail: '',
    title: 'test6',
    excerpt: 'excerpt6',
    content: 'content6',
    articleId: '6',
  },
  {
    id: 7,
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    thumbnail: '',
    title: 'test7',
    excerpt: 'excerpt7',
    content: 'content7',
    articleId: '7',
  },
  {
    id: 8,
    createdAt: getMonthsBefore(1),
    updatedAt: new Date(Date.now()),
    thumbnail: '',
    title: 'test8',
    excerpt: 'excerpt8',
    content: 'content8',
    articleId: '8',
  },
  {
    id: 9,
    createdAt: getMonthsBefore(5),
    updatedAt: getMonthsBefore(3),
    thumbnail: '',
    title: 'test9',
    excerpt: 'excerpt9',
    content: 'content9',
    articleId: '9',
  },
  {
    id: 10,
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    thumbnail: '',
    title: 'test10',
    excerpt: 'excerpt10',
    content: 'content10',
    articleId: '10',
  },
];
