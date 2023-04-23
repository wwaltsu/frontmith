/* This is a simple CRUD Web App using MithrilJS
   https://mithril.js.org/ framework, this app 
   based on a greate React tutorial by Tania Rascia
   https://www.taniarascia.com/getting-started-with-react/
 */

//################################
//#        Table Component       #
//################################   
// All Table components are just simple
// functions, stateless and rendered by
// parent. here attrs is just property
// of the function.

// Table Header 'Simple Component'
const TableHeadre = () =>{
  return m('thead', m('tr', [
    m('th', 'Name'),
    m('th', 'Job'),
    m('th', 'Action'),
  ]))
}

// Table Body 'Simple Component'
const TableBody = (attrs) => {
  const rows = attrs.characterData.map((character, index)=> {
    return m('tr', {key: index}, [
      m('td', character.name),
      m('td', character.job),
      m('td', m('button.btn', {
        onclick: () => attrs.removeCharacter(index)
      }, 'Remove'))
    ])
  })
  return m('tbody', rows)
}

// Table
const Table = (attrs) => {
  return m('table.table', [
    TableHeadre(),
    TableBody(attrs)
  ])
}

//################################
//#         Form Component       #
//################################
// { attrs } = vnode.attrs
// any data/state passed by parent
// will be property of vnode.attrs
// vnode is the component it self
const Form = ({attrs}) => {
  let initialState = {
    name: '',
    job : '',
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    initialState[name] = value
  }

  return {
    view: () => {
      const {name, job} = initialState
      return m('form.m-2 p-2', {
        onsubmit: (e) => {
          e.preventDefault()
          attrs.handleSubmit(initialState)
          initialState = {name:'', job:''}
          e.target.name.focus()
        }
      }, [
        m('.form-group', [
          m('label.form-label[for=name]', 'Name'),
          m('input.form-input[id=name][name=name]', {
            onchange: (e) => handleChange(e),
            value: name
          })
        ]),
        m('.form-group', [
          m('label.form-label[for=job]', 'Job'),
          m('input.form-input[id=job][name=job]', {
            onchange: (e) => handleChange(e),
            value: job
          })
        ]),
        m('.form-group.py-2', m('button[type=submit]',{
          class:'btn btn-primary float-right'
        }, 'Submit'))
      ])
    }
  }
}

//################################
//#      Main App Component      #
//################################

// Main component built using Closour 
// component concept, which is a function
// return POJO "Plain Old Javascript Object"
// object has access to outer function closour
// contains the state.
