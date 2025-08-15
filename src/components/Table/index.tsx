import { ReactNode } from 'react';

export type Column<T> = {
  header: string;
  accessor: keyof T | ((row: T) => ReactNode);
};

type Props<T> = {
  data: T[];
  columns: Column<T>[];
};

export default function Table<T>({ data, columns }: Props<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th
                key={i}
                className="border px-4 py-2 bg-gray-100 text-left text-sm font-medium"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, ri) => (
            <tr key={ri} className="even:bg-gray-50">
              {columns.map((col, ci) => {
                const cell = typeof col.accessor === 'function'
                  ? col.accessor(row)
                  : (row[col.accessor] as ReactNode);
                return (
                  <td key={ci} className="border px-4 py-2 text-sm">
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
