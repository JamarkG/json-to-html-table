import React from 'react'
import styles from './styles.css'

export const JSONToHTMLTable = (props) => {
  const { data, wrapperClassName, tableClassName } = props
  return (
    <div className={wrapperClassName}>
      <table className={tableClassName}>
        <tbody className={tableBody}>
          {Object.keys(data).map((k) => (
            <tr key={k} className={tableRow}>
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
    </div>
  )
}

