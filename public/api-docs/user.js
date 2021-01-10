/**
 * @swagger
 * /users:
 *  get:
 *    summary: Return all users
 *    responses:
 *      '200':
 *        description: success
 */

/**
 * @swagger
 * paths:
 *  /users/signup:
 *    post:
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                firstName:
 *                  type: string
 *                lastName:
 *                  type: string
 *                email:
 *                  type: string
 *                username:
 *                  type: string
 *                password:
 *                  type: string
 *              example:
 *                firstName: Celestin
 *                lastName: Niyindagiriye
 *                email: cniyo@gmail.com
 *                username: sele
 *                password: celestin212
 *     responses:
 *      200:
 *        description: OK
 */

/**
 * @swagger
 * /users/signup:
 *   post:
 *     tags:
 *       - Users
 *     name: SignUp
 *     summary: Create user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                firstName:
 *                 type: string
 *                lastName:
 *                  type: string
 *                username:
 *                 type: string
 *                email:
 *                 type: string
 *                password:
 *                 type: string
 *         required:
 *                -firstName
 *                -lastName
 *                -username
 *                -email
 *                -password
 *     responses:
 *       201:
 *             description: user created successfully.
 *       400:
 *             description: Bad request.
 *       409:
 *             description: The email is already in use by another account.
 * */
