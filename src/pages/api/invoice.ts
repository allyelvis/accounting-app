import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const InvoiceSchema = z.object({
  items: z.array(z.object({
    id: z.number(),
    name: z.string(),
    quantity: z.number(),
    price: z.number()
  }))
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { items } = InvoiceSchema.parse(req.body)

      const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0)
      const invoice = await prisma.invoice.create({
        data: {
          total,
          items: {
            create: items
          }
        }
      })

      res.status(200).json({ success: true, message: 'Invoice created successfully', invoice })
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: 'Invalid invoice data', errors: error.errors })
      } else {
        console.error(error)
        res.status(500).json({ success: false, message: 'Error creating invoice' })
      }
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end()
  }
}
