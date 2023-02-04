export default function selectionFilter({ movies, series }) {
  return {
    series: [
      {
        title: 'Documentaries',
        data: series.filter((item) => item.genre === 'documentaries'),
      },
      {
        title: 'Comedies',
        data: series.filter((item) => item.genre === 'comedies'),
      },

      {
        title: 'Crime',
        data: series.filter((item) => item.genre === 'crime'),
      },
      {
        title: 'Children',
        data: series.filter((item) => item.genre === 'children'),
      },
      {
        title: 'Feel good',
        data: series.filter((item) => item.genre === 'feel-good'),
      },
    ],
    movies: [
      {
        title: 'Drama',
        data: movies.filter((item) => item.genre === 'drama'),
      },
      {
        title: 'Suspense',
        data: movies.filter((item) => item.genre === 'suspense'),
      },

      {
        title: 'Thriller',
        data: movies.filter((item) => item.genre === 'thriller'),
      },
      {
        title: 'Romance',
        data: movies.filter((item) => item.genre === 'romance'),
      },
      {
        title: 'Children',
        data: movies.filter((item) => item.genre === 'children'),
      },
    ],
  };
}
