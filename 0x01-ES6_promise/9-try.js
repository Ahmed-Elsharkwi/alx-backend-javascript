export default function guardrail(mathFunction) {
  const queue = []
  try {
    const variable = mathFunction()
    queue.push(variable, 'Guardrail was processed')
  }
  catch (err) {
    queue.push(String(err), 'Guardail was processed')
  }
  return queue
}
