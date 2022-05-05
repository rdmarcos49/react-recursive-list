const mockedInformation = {
  1: 1,
  2: 2,
  3: {
    3: 3,
    4: 4,
    5: {
      5: 5,
      6: {
        6: 6
      },
      7: {
        7: 7
      }
    },
    8: 8,
    9: {
      9: 9
    }
  },
  10: 10
}

export const UserInformation = () => {
  const renderList = (information) => {
    return (
      <ul>
        {Object.values(information).map(value => {
          if (typeof value === 'object') return renderList(value)
          return (
            <li key={value}>
              {value}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <section>
      {renderList(mockedInformation)}
    </section>
  )
}

export default UserInformation
