export default function guardrail(mathFunction) {
  const queue = []
  try {
    const variable = mathFunction()
    queue.push(variable, 'Guardrail was processed')
  }
  catch (error) {
    queue.push(`Error: ${error.message}`, 'Guardail was processed')
  }
  return queue
}
