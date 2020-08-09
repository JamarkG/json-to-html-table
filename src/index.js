import React from 'react'
import styles from './styles.css'

export const JSONToHTMLTable = (props) => {
  const { data, tableClassName } = props
  return (
    <table className={tableClassName}>
      <tbody>
        {Object.keys(data).map((k) => (
          <tr key={k}>
            {!Array.isArray(data)
              && <td>{k.replace(/_/g, ' ')}</td>}
            {(() => {
              if (data[k] && typeof data[k] === 'object') {
                return (
                  <td>
                    <JSONToHTMLTable data={data[k]} tableClassName={tableClassName} />
                  </td>
                )
              }
              return (
                <td>
                  <span dangerouslySetInnerHTML={{ __html: data[k] }} />
                </td>
              )
            })()}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

