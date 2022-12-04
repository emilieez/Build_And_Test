import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let dom
let container

describe('index.html', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })

  it('Shows new text when button is clicked', async () => {
    const button = getByText(container, 'What is the best CI/CD Tool?')
    
    fireEvent.click(button)
    expect(getByText(container, 'CircleCI!')).toBeInTheDocument()
  })

})
