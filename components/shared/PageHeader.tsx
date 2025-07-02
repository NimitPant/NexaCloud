import React from 'react'

const PageHeader = ({title, subtitle}: {title: string, subtitle?: string}) => {
  return (
    <section className="bg-purple-100 bg-dotted-pattern bg-cover bg-center py-12 text-center">
        <h1 className="h1-bold text-dark-700">{title}</h1>
        {subtitle && <p className="p-16-regular mt-4">{subtitle}</p>}
    </section>
  )
}

export default PageHeader 