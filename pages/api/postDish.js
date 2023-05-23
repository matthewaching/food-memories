import prisma from '../../src/client';

export default async function postDish(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Invalid HTTP method' });
    }

    const dishData = req.body;
    const savedData = await prisma.mydishes.create({
        data: dishData
    });

    res.json(savedData);
}
